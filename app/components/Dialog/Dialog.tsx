import "./styles.css";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { FaBitcoin, FaCopy, FaDonate, FaEthereum } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <FaDonate
        style={{
          cursor: "pointer",
          width: 30,
          height: 30,
          color: "white",
          position: "absolute",
          top: 30,
          left: 30,
          zIndex: 2,
        }}
      />
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <VisuallyHidden>
          <Dialog.Title>Donations</Dialog.Title>
        </VisuallyHidden>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <li style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <FaBitcoin />{" "}
            <input
              type="text"
              value="bc1qrttrlwl5zqtj030dsc00fpz6qr9rltcqxlkydh"
              style={{
                width: "80%",
                border: "1px solid gray",
                padding: "5px 10px",
                borderRadius: 20,
              }}
              readOnly
            />
            <button>
              <FaCopy />{" "}
            </button>
          </li>
          <li style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <FaEthereum />{" "}
            <input
              type="text"
              value="0x91e1B94b3CF5BC626dF16bFf72Fc25AD619379ef"
              style={{
                width: "80%",
                border: "1px solid gray",
                padding: "5px 10px",
                borderRadius: 20,
              }}
              readOnly
            />
            <button>
              <FaCopy />{" "}
            </button>
          </li>
          <li style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <SiSolana />{" "}
            <input
              type="text"
              value="GEmYWCJNd1t43CsHeg3behzSGntNJ7wVzgSafqLmhMtT"
              style={{
                width: "80%",
                border: "1px solid gray",
                padding: "5px 10px",
                borderRadius: 20,
              }}
              readOnly
            />
            <button>
              <FaCopy />{" "}
            </button>
          </li>
        </ul>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
