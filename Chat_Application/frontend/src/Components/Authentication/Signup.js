import { Button, FormControl, FormLabel, Input, InputGroup, InputRightAddon, InputRightElement, VStack, } from '@chakra-ui/react'
import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react'

const Signup = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [pic, setPic] = useState();
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const handleClick = () => setShow(!show);

    const postDetails = (pics) => { 
        setLoading(true);
        if (pic === undefined) {
            toast({
                title: 'Please Select an Image!',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });
            return;
        }
    };
    const submitHandler = () => { };
    return (
        <VStack spacing={'5px'} color={'black'}>
            <FormControl id='first-name' isRequired >
                <FormLabel>
                    Name
                </FormLabel>
                <Input
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
            <FormControl id='email' isRequired >
                <FormLabel>
                    Name
                </FormLabel>
                <Input
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id='password' isRequired >
                <FormLabel>
                    Password
                </FormLabel>
                <InputGroup>
                    <Input
                        type={show? 'text':'password'}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width={'4.5rem'}>
                        <Button h={'1.75rem'} size='sm' onClick = {handleClick}>
                        {show ? "Hide" : "Show"}

                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id='pic' >
                <FormLabel>
                    Upload your pic
                </FormLabel>
                <Input
                    type='file'
                    p={'1.5'}
                    accept={'image/*'}
                    onChange={(e) => postDetails(e.target.files[0])}//access the first image if the user uploads multiple images
                />
            </FormControl>
            <Button
                colorScheme={'blue'}
                width='100%'
                style={{ marginTop: 15 }}
                onClick={submitHandler}
            >
                Sign Up
            </Button>
    </VStack >
  )
}

export default Signup
