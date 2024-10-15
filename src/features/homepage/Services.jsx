import styled from 'styled-components';
import servicePhoto1 from '../../data/img/homepage-services-1.jpg';
import servicePhoto2 from '../../data/img/homepage-services-2.jpg';
import servicePhoto3 from '../../data/img/homepage-services-3.jpg';

const ServicesSection = styled.div`
    width: 100%;
`;

const ServiceItem = styled.div`
    position: relative;
    height: 300px;
    width: 100%;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }

    h3 {
        font-size: 2rem;
    }

    p {
        font-size: 1.2rem;
        max-width: 600px;
    }

    button {
        margin-top: 20px;
        background-color: var(--color-green-400);
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: var(--color-green-500);
        }
    }
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 1;
    }

    > div {
        position: relative;
        z-index: 2;
    }
`;

function Services() {
    return (
        <ServicesSection>
            <ServiceItem bg={servicePhoto1}>
                <div>
                    <h3>Own Line of Medicines</h3>
                    <p>
                        BioPharm produces unique medicines based on natural
                        components and the latest technologies.
                    </p>
                    <button>Read</button>
                </div>
            </ServiceItem>
            <ServiceItem bg={servicePhoto2}>
                <div>
                    <h3>Sale of Medicines of Other Manufacturers</h3>
                    <p>
                        We offer a wide range of medicines from proven partners
                    </p>
                    <button>Store</button>
                </div>
            </ServiceItem>
            <ServiceItem bg={servicePhoto3}>
                <div>
                    <h3>Delivery across the city and the country</h3>
                    <p>
                        We offer express delivery in the city and postal
                        delivery throughout the country.
                    </p>
                    <button></button>
                </div>
            </ServiceItem>
        </ServicesSection>
    );
}

export default Services;
