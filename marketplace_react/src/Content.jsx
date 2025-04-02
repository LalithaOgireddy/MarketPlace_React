import React from 'react';

const advertisementsData = [
    {
        title:'Ad 1',
        description:'This is the first advertisement.',
        image: 'https://placehold.co/150X150',
        contact: 'contact1@example.com'
    },
    {
        title:'Ad 2',
        description:'This is the second advertisement.',
        image: 'https://placehold.co/150X150',
        contact: 'contact2@example.com'
    },
    {
        title:'Ad 3',
        description:'This is the third advertisement.',
        image: 'https://placehold.co/150X150',
        contact: 'contact3@example.com'
    },
    {
        title:'Ad 4',
        description:'This is the fourth advertisement.',
        image: 'https://placehold.co/150X150',
        contact: 'contact4@example.com'
    },
    {
        title:'Ad 5',
        description:'This is the fifth advertisement.',
        image: 'https://placehold.co/150X150',
        contact: 'contact5@example.com'
    },
    {
        title:'Ad 6',
        description:'This is the sixth advertisement.',
        image: 'https://placehold.co/150X150',
        contact: 'contact6@example.com'
    }
  ];

const Content = () => {
    return (
        <div>
            <main className='mx-5 py-5'>
                <div className="container">
                    <h3>Advertisement List</h3>                    
                </div>
                <div id="advertisements" class="row m-3">                    
                    {
                        advertisementsData.map((ad => (
                            <div className="card col-md-4 mb-4">
                                <img src = {ad.image} className='card-img-top' alt = "img.png"></img>
                                <div className='card-body'>
                                    <h5 className='card-title'>{ad.title}</h5>
                                    <p className = 'card-text'>{ad.description}</p>
                                    <p className = 'card-text'>Contact: {ad.contact}</p>
                                </div>
                                <div className='card-footer text-center'>
                                    <button className='btn btn-info'>Details</button>
                                </div>
                            </div>
                        )))
                    }
                    </div>
            </main>
        </div>
    );
};

export default Content;