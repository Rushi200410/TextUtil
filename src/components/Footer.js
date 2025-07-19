import React from 'react'
export default function Footer(props) {
  return (
    <footer className="bg-dark text-light text-center py-0">
        © 2025 TextUtils. All rights reserved <b><u>{props.reservedby}</u></b>
    </footer>
  )
}