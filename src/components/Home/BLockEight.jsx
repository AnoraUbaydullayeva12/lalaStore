import React, { useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log("Subscribed with:", email);
    // Add your API call or logic here
    setEmail("");
  };

  return (
    <div className="bg-white py-22 text-center px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Подписаться на рассылку</h2>
      <form
        onSubmit={handleSubscribe}
        className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <div className="flex w-full sm:w-auto border rounded-full overflow-hidden bg-gray-100">
          <input
            type="email"
            placeholder="e-mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 w-full sm:w-64 bg-gray-100 outline-none text-gray-700 placeholder-gray-400"
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 transition text-white px-6 py-2 text-sm font-semibold rounded-full"
          >
            ПОДПИСАТЬСЯ
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;
