const worker = {
  async fetch(): Promise<Response> {
    return new Response("OK");
  },
};

export default worker;
