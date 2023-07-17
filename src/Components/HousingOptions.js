import React from 'react';

function HousingOptions() {
    return (
        <div className="flex justify-center mt-8">
            <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-6 border border-black">
                <h1 className="text-2xl font-bold mb-4">Popular Housing Options Near You</h1>

                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Popularity rating #1</h2>
                    <div className="flex items-center space-x-4">
                        <img src="house1.jpg" alt="House 1" className="w-32 h-32 rounded" />
                        <div>
                            <h3 className="text-lg font-bold">House 1</h3>
                            <p className="text-gray-600">Located at Shoreline. Contact Aiden Ma for more information</p>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Popularity rating #2</h2>
                    <div className="flex items-center space-x-4">
                        <img src="house2.jpg" alt="House 2" className="w-32 h-32 rounded" />
                        <div>
                            <h3 className="text-lg font-bold">House 2</h3>
                            <p className="text-gray-600">Located at U-District. Contact Aiden Ma for more information</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-4">Popularity rating #3</h2>
                    <div className="flex items-center space-x-4">
                        <img src="house3.jpg" alt="House 3" className="w-32 h-32 rounded" />
                        <div>
                            <h3 className="text-lg font-bold">House 3</h3>
                            <p className="text-gray-600">Located at Capital Hill. Contact Aiden Ma for more information</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HousingOptions;
