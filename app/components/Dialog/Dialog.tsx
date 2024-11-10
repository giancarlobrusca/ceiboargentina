import "./styles.css";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { FaBitcoin, FaDonate, FaEthereum } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import { CopyToClipboard } from "../CopyToClipboard/CopyToClipboard";

export const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <FaDonate
        className="hover:text-gray-300"
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
        <Dialog.Title className="DialogTitle">Contribuí</Dialog.Title>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <li style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <CopyToClipboard
              icon={<FaBitcoin />}
              text="bc1qrttrlwl5zqtj030dsc00fpz6qr9rltcqxlkydh"
            />
          </li>
          <li style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <CopyToClipboard
              icon={<FaEthereum />}
              text="0x91e1B94b3CF5BC626dF16bFf72Fc25AD619379ef"
            />
          </li>
          <li style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <CopyToClipboard
              icon={<SiSolana />}
              text="GEmYWCJNd1t43CsHeg3behzSGntNJ7wVzgSafqLmhMtT"
            />
          </li>
        </ul>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
