import React, {PropsWithChildren} from 'react';

export type CardProps = {
    title: string,
    text: string,
    linkHref: string,
    linkTitle: string
}

export function Card(props: PropsWithChildren<CardProps>) {
    const {title, text, linkHref, linkTitle, children} = props;
    return (
        <div className="card" style={{width: "18rem"}}>
            {children}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={linkHref} className="btn btn-primary">{linkTitle}</a>
            </div>
        </div>
    )
}

function getImageTag(imageUrl: string) {
    return imageUrl ? <img src={imageUrl} className="card-img-top" alt="image"></img> : "";
}