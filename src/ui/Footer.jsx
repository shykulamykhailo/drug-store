import { useState } from 'react';
import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaPhone,
    FaTwitter,
} from 'react-icons/fa';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: var(--color-green-100);
    padding: 40px 20px;
    color: var(--color-green-700);
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
`;

const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;
const ColumnTitle = styled.h3`
    font-size: 1.25rem;
    margin-bottom: 10px;
    color: var(--color-green-800);
`;
const FooterLink = styled.a`
    color: var(--color-green-700);
    display: block;
    margin-bottom: 5px;
    transition: transform 0.3s ease, color 0.3s ease;
    cursor: pointer;

    &:hover {
        color: var(--color-green-1000);
        transform: scale(1.1);
    }
`;
const SocialIcons = styled.div`
    display: flex;
    gap: 20px;
    margin: 10px 0;

    a {
        color: var(--color-green-700);
        font-size: 1.5rem;
        transition: transform 0.3s ease, color 0.3s ease;

        &:hover {
            color: var(--color-green-1000);
            transform: scale(1.1);
        }
    }
`;
const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    a {
        color: var(--color-green-700);
        margin: 5px 0;
        display: inline-block;
        align-items: center;
        transition: transform 0.3s ease;
        cursor: pointer;

        svg {
            margin-right: 10px;
        }

        &:hover {
            color: var(--color-green-1000);
            transform: scale(1.05);
        }
    }
`;

const CopyMessage = styled.p`
    font-size: 0.9rem;
    color: var(--color-green-500);
    margin-top: 10px;
`;

function Footer() {
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipboard = (text) => {
        navigator.clipboard
            .writeText(text)
            .then(() => setCopySuccess(`Copied: ${text}`))
            .catch(() => setCopySuccess('Failed to copy'));

        setTimeout(() => setCopySuccess(''), 2000);
    };

    return (
        <StyledFooter>
            <FooterContent>
                <FooterColumn>
                    <ColumnTitle>Company</ColumnTitle>
                    <FooterLink>About Us</FooterLink>
                    <FooterLink>Our services</FooterLink>
                    <FooterLink>Contact</FooterLink>
                    <FooterLink>Careers</FooterLink>
                </FooterColumn>
                <FooterColumn>
                    <ColumnTitle>Useful Links</ColumnTitle>
                    <FooterLink>FAQ</FooterLink>
                    <FooterLink>Privacy Policy</FooterLink>
                    <FooterLink>Terms & conditions</FooterLink>
                </FooterColumn>
                <FooterColumn>
                    <ColumnTitle>Follow Us</ColumnTitle>
                    <SocialIcons>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaTwitter />
                        </a>
                    </SocialIcons>
                    <ColumnTitle>Contact Us</ColumnTitle>
                    <ContactInfo>
                        <a href="tel:+380662666969">
                            <FaPhone /> +380 66 266 69 69
                        </a>
                        <a
                            onClick={() =>
                                copyToClipboard('support@biopharm.com')
                            }
                        >
                            <FaEnvelope /> support@biopharm.com
                        </a>
                    </ContactInfo>
                    {copySuccess && <CopyMessage>{copySuccess}</CopyMessage>}
                </FooterColumn>
            </FooterContent>
        </StyledFooter>
    );
}

export default Footer;
