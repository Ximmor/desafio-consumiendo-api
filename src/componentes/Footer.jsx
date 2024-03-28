import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="fixed-bottom text-center p-3 bg-warning text-danger">
        <div className="footer-icon">
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
          <p className="m-0">
            ximmor©2024 Todos los derechos reservados
          </p>
      </footer>
    </>
  );
}
