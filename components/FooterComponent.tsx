
import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function FooterComponent() {
    return (
        <Footer container className="bg-gray-800 text-gray-100">
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <FooterBrand
                            href="https://flowbite.com"
                            src="/logo.png"
                            alt="Flowbite Logo"
                            name="E-Drink"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 mb-6 text-gray-100">
                        <div>
                            <FooterTitle title="About" className="text-gray-100"/>
                            <FooterLinkGroup col>
                                <FooterLink href="/">E-Drink</FooterLink>
                                <FooterLink href="/">Company Info</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle title="Follow Us" className="text-gray-100"/>
                            <FooterLinkGroup col>
                                <FooterLink href="/">Facebook</FooterLink>
                                <FooterLink href="/">Instagram</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle title="Legal" className="text-gray-100"/>
                            <FooterLinkGroup col>
                                <FooterLink href="/">Privacy Policy</FooterLink>
                                <FooterLink href="/">Terms &amp; Conditions</FooterLink>
                            </FooterLinkGroup>
                        </div>
                    </div>
                </div>
                <FooterDivider />
                <div className="w-full sm:flex sm:items-center sm:justify-between mt-6">
                    <FooterCopyright href="/" by=" E-Drink™" year={2024} className="text-gray-100"/>
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <FooterIcon href="/" icon={BsFacebook} />
                        <FooterIcon href="/" icon={BsInstagram} />
                        <FooterIcon href="/" icon={BsTwitter} />
                        <FooterIcon href="/" icon={BsGithub} />
                        <FooterIcon href="/" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    );
}
