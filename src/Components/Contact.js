import React from 'react'





import { Button, Container, Form, FormLabel } from 'react-bootstrap'

import './Contact.css'
const Contact = () => {

    // const [lastname, setlastname] = useState('');

    // const handleNumChange = event => {
    //     const limit = 10;
    //     setNum(event.target.value.slice(0, limit));
    // };

    const [values, setValues] = React.useState({
        name: '',
        email: '',
        lastname: '',
        msg: ''
    })

    const [validations, setValidations] = React.useState({
        name: '',
        email: '',
        lastname: '',

        msg: '',
    })

    const validateAll = () => {
        const { name, email, lastname, msg } = values
        const validations = { name: '', email: '', lastname: '', msg: '' }
        let isValid = true

        if (!name) {
            validations.name = '*Please enter your Name '

            isValid = false
        } else if (name && !/^[a-zA-Z ]*$/.test(name)) {
            validations.name = 'Only letters are allowed'
            isValid = false
        }




        if (name && name.length < 3 || name.length > 50) {
            validations.name = 'Name must contain between 3 and 50 characters'
            isValid = false
        }

        if (!lastname) {
            validations.lastname = '*Please enter your Last Name '

            isValid = false
        } else if (lastname && !/^[a-zA-Z ]*$/.test(lastname)) {
            validations.lastname = 'Only letters are allowed'
            isValid = false
        }




        if (name && name.length < 3 || name.length > 50) {
            validations.name = 'Name must contain between 3 and 50 characters'
            isValid = false
        }



        if (!email) {
            validations.email = '*Please enter your Email '
            isValid = false
        }

        if (email && !/\S+@\S+\.\S+/.test(email)) {
            validations.email = 'Email format must be as example@mail.com'
            isValid = false
        }



        if (!msg) {
            validations.msg = '*Please enter your Message'
            isValid = false
        }


        if (!isValid) {
            setValidations(validations)
        }

        return isValid
    }

    const validateOne = (e) => {
        const { name } = e.target
        const value = values[name]
        let message = ''

        if (!value) {
            message = `${name} `
        }

        if (value && name === 'name' && (value.length < 3 || value.length > 50)) {
            message = 'Name must contain between 3 and 50 characters'
        }

        if (value && name === 'lastname' && (value.length < 3 || value.length > 50)) {
            message = 'Name must contain between 3 and 50 characters'
        }
        if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            message = 'Email format must be as example@mail.com'
        }

        setValidations({ ...validations, [name]: message })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isValid = validateAll()

        if (!isValid) {
            return false
        }

        // alert(JSON.stringify(values))
    }

    const { name, email, lastname, msg } = values

    const {
        name: nameVal,
        email: emailVal,
        lastname: lastnameVal,

        msg: msgVal,

    } = validations

    return (
        <div>
            <div className="new-wrapperb">



                <Container >

                    <Form className='form9180' onSubmit={handleSubmit}>



                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <FormLabel className="fomlable1">First Name</FormLabel>
                            <Form.Control className="no-outline FormControl2" type="text" maxLength={20}
                                name="name"
                                onChange={handleChange}
                                onBlur={validateOne} />
                            <div style={{ color: "red" }} >{nameVal} </div>
                        </Form.Group>




                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <FormLabel className="fomlable1">Last Name</FormLabel>
                            <Form.Control className="FormControl2" type="text"
                                name="lastname"
                                onChange={handleChange}
                                onBlur={validateOne} />
                            <div style={{ color: "red" }} >{lastnameVal} </div>

                        </Form.Group>





                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <FormLabel className="fomlable1">Email Id</FormLabel>
                            <Form.Control className="FormControl2" type="email" maxLength={20} name="email"

                                onChange={handleChange}
                                onBlur={validateOne} />
                            <div style={{ color: "red" }}>{emailVal}</div>
                        </Form.Group>

                        <FormLabel className="fomlable1">Write your Message</FormLabel>

                        <Form.Control className="FormControl2" as="textarea"
                            rows={3} style={{ height: "10px" }}

                            maxLength={200} name="msg"
                            onChange={handleChange}
                            onBlur={validateOne} />
                        <div style={{ color: "red" }}>{msgVal}</div>




                        <Button className='VOIR_LESPRODUITSbn8 my-5' type="submit">Submit</Button>
                    </Form>

                </Container>


            </div>
        </div>
    )
}

export default Contact
