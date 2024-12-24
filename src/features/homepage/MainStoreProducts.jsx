import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMainDrugs } from '../store/useMainDrugs';
import Spinner from '../../ui/Spinner';

const MainDrugsContainer = styled.div`
    width: 100%;
    height: 30%;
    padding: 40px 20px;
    overflow: hidden;
`;

const MainDrugItem = styled.div`
    border-radius: 10px;
    background: white;

    .slick-slide {
        padding: 0 10px;
    }
`;

const ProductCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    text-align: center;

    h3 {
        font-size: 1rem;
        margin-bottom: 10px;
        color: var(--color-green-800);
    }

    img {
        width: 200px;
        height: 200px;
        border-radius: 10px;
        object-fit: cover;
    }

    p {
        font-size: 0.8rem;
        color: var(--color-green-800);
        max-width: 600px;
        line-height: 1.5;
    }
`;

function MainStoreProducts() {
    const { isLoading, mainDrugs } = useMainDrugs();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <MainDrugsContainer>
            <Slider {...settings}>
                {mainDrugs.map((drug, index) => (
                    <MainDrugItem key={index}>
                        <ProductCart>
                            <img src={drug.drug_image} />
                            <h3>{drug.name}</h3>
                            <p>{drug.description}</p>
                        </ProductCart>
                    </MainDrugItem>
                ))}
            </Slider>
        </MainDrugsContainer>
    );
}

export default MainStoreProducts;
