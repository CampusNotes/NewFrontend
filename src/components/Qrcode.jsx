import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { QRCodeSVG } from 'qrcode.react';
import { NavLink } from "react-router-dom";


export function Qrcode({
  open,
  handleOpen,
  billId
}) {

  const url = import.meta.env.VITE_BACKEND_URL;

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Scan QR Code</DialogHeader>
        <DialogBody className="flex flex-col items-center justify-center">
          <QRCodeSVG value={`${url}/api/bill/getbill/${billId}`} />
          {/* <h4>http://localhost:8000/api/bill/getbill/{billId}</h4> */}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
