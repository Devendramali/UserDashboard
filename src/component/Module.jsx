import React from 'react'
import { useEffect } from "react";

const Module = ({ user, show, handleClose }) => {
    // Add/remove Bootstrap class to show/hide modal
    useEffect(() => {
        const modal = document.getElementById("userModal");
        if (modal) {
            if (show) {
                modal.classList.add("show", "d-block");
                modal.style.backgroundColor = "rgba(0,0,0,0.5)";
            } else {
                modal.classList.remove("show", "d-block");
                modal.style.backgroundColor = "";
            }
        }
    }, [show]);

    if (!user) return null;
    return (
        <>
            <div
                className="modal fade"
                id="userModal"
                tabIndex="-1"
                aria-labelledby="userModalLabel"
                aria-hidden={!show}
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="userModalLabel">User Details</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={handleClose}
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body profile">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="profile mb-3">
                                        <img src="./user.png" alt="" />
                                    </div>
                                          <h3>Name: <span> {user.name}</span></h3>
                                          <h3>Username: <span> {user.username}</span></h3>
                                    <h3>Email: <span> {user.email}</span></h3>
                                    <h3>Phone: <span> {user.phone}</span></h3>
                                    <h3>Website: <span><a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a> </span></h3>
                                 <h3>Address: <span> {user.address.street}, {user.address.suite}, {user.address.city} - {user.address.zipcode}</span></h3>

                                </div>
                                <div className="col-lg-6">
                                    <iframe
                                        width="100%" 
                                        className='mb-3'
                                        height="200px"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        src={`https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}&hl=es;z=14&output=embed`}
                                        allowFullScreen
                                    ></iframe>
                                        
                                    <h3 className='mb-2 com'>Company Details: </h3>
                                    <p>Name: <span>{user.company.name}</span></p>
                                    <p>CatchPhrase: <span>{user.company.catchPhrase}</span></p>
                                    <p>business: <span>{user.company.bs}</span></p>

                                </div>
                               
                            </div>


                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Module

// <p><strong></p>
//     <p><strong>Email:</strong> {user.email}</p>
//     <p><strong>Phone:</strong> {user.phone}</p>
//     <p><strong>Company:</strong> {user.company.name}</p>
//     <p><strong>Website:</strong> {user.website}</p>
//     <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>