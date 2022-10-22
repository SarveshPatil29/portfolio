import React from "react";

const UserCard = (props) => {
    return (
        <div className="mx-5 my-2">
            <div class="max-w-sm rounded overflow-hidden shadow-lg w-64 break-all">
                <img
                    class="w-full"
                    src={props.img}
                    alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{props.name}</div>
                    <p class="text-gray-700 text-base">
                        Portfolio URL: <br />
                        <a href={`http://localhost:3000/${props.id}`}>
                            http://localhost:3000/{props.id}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
