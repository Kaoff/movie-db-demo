import { Input, Button, Text, Stack, Center } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const [search, setSearch] = useState<string>('');

    const navigate = useNavigate();
  
    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    }

    const onPressEnter: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key !== "Enter") return;
        onButtonClick();
    }

    const onButtonClick = () => {
        navigate(`/search/${search}`);
    }
  
    return (
        <>
            <Center height='100%'>
                <Stack>
                    <Text fontSize="3xl">The Movie DB Api Demonstration</Text>
                    <Input 
                        placeholder="Search for movies or TV shows..." 
                        id="search-bar" 
                        aria-label="search" 
                        value={search} 
                        onChange={onSearchChange}
                        onKeyDown={onPressEnter}
                    />
                    <Button onClick={onButtonClick} width="100%">Search medias</Button>
                </Stack>
            </Center>
        </>
    )
}

export default Home;
