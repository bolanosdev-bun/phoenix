FROM imbios/bun-node:18-slim AS deps
ARG DEBIAN_FRONTEND=noninteractive

LABEL fly_launch_runtime="Next.js"

# I use Asia/Jakarta as my timezone, you can change it to your timezone
RUN apt-get -y update && \
  apt-get install -yq openssl git ca-certificates tzdata && \
  ln -fs /usr/share/zoneinfo/America/Los_Angeles /etc/localtime && \
  dpkg-reconfigure -f noninteractive tzdata

# Next.js app lives here
WORKDIR /app

# Build the app
FROM deps AS builder

# Set production environment
ENV NODE_ENV="production"

# Install node modules
COPY --link . . 
RUN bun install --frozen-lockfile

RUN bun run next:build


# Production image, copy all the files and run next
FROM node:18-slim AS runner

WORKDIR /app
# Final stage for app image

# Copy built application
COPY --from=builder /app /app

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "npm", "run", "next:start" ]
