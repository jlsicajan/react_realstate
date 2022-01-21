import Link from 'next/link';
import Image from 'next/image';
import {Flex, Box, Text, Button} from '@chakra-ui/react';

const Banner = ({purpose, image_url, title_one, title_two, description_one, description_two, link_name, button_text}) => (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
        <Image src={image_url} width={500} height={300} alt='banner'/>
        <Box p={5}>
            <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
            <Text fontSize="3x1" fontWeight="bold">{title_one}<br/> {title_two}</Text>
            <Text color="gray.700" fontSize="lg" paddingTop="3" paddingBottom="3">{description_one}<br/> {description_two}</Text>
            <Button fontSize="xl" bg="blue.300" color="white">
                <Link href={link_name}>{button_text}</Link>
            </Button>
        </Box>
        {purpose}
    </Flex>
)

export default function Home() {
    return (
        <div>
            <h1>Hello World</h1>
            <Banner 
                purpose="RENT A HOME"
                title_one="Rental Homes for"
                title_two="Everyone"
                description_one="Exlore Apartments, Villas, Homes"
                description_two="and more..."
                button_text="Explore Renting"
                link_name="/search?purpose=for-rent"
                image_url="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
            />

            <Banner 
                purpose="BUY A HOME"
                title_one="Find, Buy & Own Your"
                title_two="Dream Home"
                description_one="Exlore Apartments, Villas, Homes"
                description_two="and more..."
                button_text="Explore Buying"
                link_name="/search?purpose=for-sale"
                image_url="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
            />
        </div>
    )
}
