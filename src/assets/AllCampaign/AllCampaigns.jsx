import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/campaigns') // Adjust URL based on deployment
            .then(res => res.json())
            .then(data => setCampaigns(data))
            .catch(err => console.error('Error fetching campaigns:', err));
    }, []);

    const handleSeeMore = (campaignId) => {
        navigate(`/campaign/${campaignId}`);
    };

    return (
        <div className="md:px-32">
            <h2 className="font-extrabold text-4xl my-6">All Campaigns</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Campaign Title</th>
                            <th className="border border-gray-300 px-4 py-2">Description</th>
                            <th className="border border-gray-300 px-4 py-2">Deadline</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign) => (
                            <tr key={campaign._id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2 font-semibold">{campaign.campaignTitle}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {campaign.description.length > 100 
                                        ? `${campaign.description.slice(0, 100)}...` 
                                        : campaign.description}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    {new Date(campaign.deadline).toLocaleDateString()}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                        onClick={() => handleSeeMore(campaign._id)}
                                    >
                                        See More
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCampaigns;
