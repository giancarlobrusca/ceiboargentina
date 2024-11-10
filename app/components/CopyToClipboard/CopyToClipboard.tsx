import React, { useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";

export const CopyToClipboard = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => setCopied(true))
      .catch((err) => console.error("Failed to copy text: ", err));

    setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 seconds
  };

  return (
    <div
      style={{ width: "100%", display: "flex", alignItems: "center", gap: 20 }}
    >
      {icon}
      <input
        type="text"
        value={text}
        readOnly
        style={{
          width: "80%",
          border: "1px solid gray",
          padding: "5px 10px",
          borderRadius: 20,
        }}
      />

      <button onClick={copyToClipboard}>
        {copied ? <FaCheck /> : <FaCopy />}
      </button>
    </div>
  );
};
