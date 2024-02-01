import { describe, expect, it } from "bun:test";

import app from "../../src/index";

describe("My first test", () => {
  it("Should return 200 Response", async () => {
    const req = new Request("http://localhost:3000/");
    const res = await app.fetch(req);
    
    expect(res.status).toBe(200);
  });

  it("Should return 200 for users", async () => {
    const req = new Request("http://localhost:3000/users?count=10&page=1");
    const res = await app.fetch(req);
    const json = await res.json()
    expect(res.status).toBe(200);
  });

  it("Should return 400 for users", async () => {
    const req = new Request("http://localhost:3000/users?count=10");
    const res = await app.fetch(req);
    const json = await res.json()
    
    expect(res.status).toBe(400);
    expect(json.success).toEqual(false)

    expect(json.error.name).toEqual('ZodError')
    const error = json.error.issues.pop()
    expect(error.code).toEqual('invalid_type')
    expect(error.expected).toEqual('number')
    expect(error.received).toEqual('nan')
    expect(error.path).toEqual(['page'])
    expect(error.message).toEqual('Expected number, received nan')
  });
});
