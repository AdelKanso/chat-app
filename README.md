# Chat App – Next.js + Mistral API

This is a small chat application I built with **Next.js**, **TypeScript** and **TailwindCSS**.  
It connects to the **Mistral API** to generate responses, and I focused on keeping the code clean, easy to run, and easy to test.

---

## How to run it

1. Clone the project and go inside the folder:
```bash
git clone https://github.com/AdelKanso/chat-app.git
cd chat-app
````

2. Install the dependencies:

```bash
npm install
```

3. Add your API key in a `.env.local` file at the root of the project:

```env
MISTRAL_API_KEY=your_api_key_here
```

4. Start the dev server:

```bash
npm run dev
```

The app will run on [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
chat-app/
├── .env.local               # API
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/route.ts    # Api to communicate with chat 
│   │   └── page.tsx             # Main page
│   ├── components/
│   │   ├── ChatBox.tsx          # Chat window
│   │   ├── Message.tsx          # Message item
│   │   └── Input.tsx            # Input box
└── package.json
```

---

## Notes

* I kept the UI simple but responsive with Tailwind.
* The API key is loaded from `.env.local`.
* There’s a loader when waiting for the assistant reply.
* The project can be tested easily by mocking the `/api/chat` endpoint.

---

## Deployment

To build and run in production:

```bash
npm run build
npm start
```