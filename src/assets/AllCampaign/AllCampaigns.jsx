import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Button, LinearProgress } from '@mui/material';
import { AccessTime } from '@mui/icons-material';

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

    const calculateTimeLeft = (deadline) => {
        const deadlineDate = new Date(deadline);
        const now = new Date();
        const timeLeft = deadlineDate - now;
        return Math.max(0, timeLeft); // Prevent negative progress
    };

    return (
        <div className="campaigns-list">
            <h2>All Campaigns</h2>
            <div className="campaign-cards-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {campaigns.map((campaign) => (
                    <Card key={campaign._id} sx={{ width: 300, cursor: 'pointer', boxShadow: 3, transition: 'transform 0.2s' }} 
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        onClick={() => handleSeeMore(campaign._id)}
                    >
                        <CardContent>
                            
                            <img src={campaign.image} alt="" />
                            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                                {campaign.campaignTitle}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
                                {campaign.description.length > 80 ? `${campaign.description.slice(0, 80)}...` : campaign.description}
                            </Typography>
                            <LinearProgress 
                                variant="determinate" 
                                value={(100 * (calculateTimeLeft(campaign.deadline) / (new Date(campaign.deadline) - new Date(campaign.startDate))))} 
                                sx={{ marginBottom: '10px' }} 
                            />
                            <Typography variant="body2" color="text.secondary">Donate before: 
                                {new Date(campaign.deadline).toLocaleDateString()}
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ marginTop: '10px' }}
                                endIcon={<AccessTime />}
                            >
                                See More
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AllCampaigns;
