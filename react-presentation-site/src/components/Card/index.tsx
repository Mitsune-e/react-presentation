import React, { ReactNode } from "react";

interface IProps {
  img?: {
    src: string;
    alt: string;
  };
  title?: ReactNode;
  text?: string;
}

export const Card: React.FC<IProps> = ({ img, title, text }) => {
  return (
    <>
      <div className="card" style={{ "width": "18rem" }}>
        {img && <img src={`./${img.src}`} className="card-img-top" alt={img.alt} />}

        <div className="card-body">
          {title && <h5 className="card-title">{title}</h5>}

          {text && <p className="card-text">{text}</p>}
        </div>
      </div>
    </>
  );
}