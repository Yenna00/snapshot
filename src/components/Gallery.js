import React from 'react';
import Image from './Image';
import NoImages from './NoImages';

function Gallery({ data }) {
    let images;
    let noimages;
    if (data.length > 0) {
        images = data.map(image => {
            let farm = image.farm;
            let server = image.server;
            let id = image.id;
            let secret = image.secret;
            let title = image.title;
            let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
            return <Image url={url} alt={title} key={id} />
                ;
        });
    } else{
        noimages=<NoImages/>
    }

    return (
        <>
            <ul>{images}</ul>
            {noimages}
        </>
    );
}

export default Gallery;