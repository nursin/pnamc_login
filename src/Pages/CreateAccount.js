import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { db, storage } from '../firebase';
import firebase from 'firebase';

function CreateAccount() {
    const [fname, setFname] = useState('');
    const [mname, setMname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [yearsOfExp, setYearsOfExp] = useState('');
    const [degrees, setDegrees] = useState('');
    const [certs, setCerts] = useState('');
    const [certsIssuer, setCertsIssuer] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [jobPosition, setJobPosition] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [practiceSetting, setPracticeSettings] = useState('');
    const [preferredContact, setPreferredContact] = useState('');
    const [addressCity, setAddressCity] = useState('');
    const [addressState, setAddressState] = useState('');
    const [addressZip, setAddressZip] = useState('');
    const [address, setAddress] = useState('');
    const [dob, setDob] = useState('');
    const [recruitedBy, setRecruitedBy] = useState('');
    const [rnLicenseExpiration, setRnLicenseExpiration] = useState('');
    const [rnLicenseNumber, setRnLicenseNumber] = useState('');
    const [schools, setSchools] = useState('');
    const [workplace, setWorkplace] = useState('');
    const [references, setReferences] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [progress, setProgress] = useState(0);
    // redux
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImageFile(e.target.files[0])
        }
    };

    const handleCreateMember = () => {
        const uploadTask = storage.ref(`member-images/${user.uid}`).put(imageFile);
        // progress bar function
        uploadTask.on(
            "state-changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            // storing in db
            () => {
                storage
                    .ref("member-images")
                    .child(user.uid)
                    .getDownloadURL()
                    .then(url => {
                        // post image in db
                        db
                            .collection("users")
                            .doc(user.uid)
                            .set({
                                created: firebase.firestore.FieldValue.serverTimestamp(),
                                authUid: user.uid,
                                first_name: fname.toLowerCase(),
                                middle_name: mname.toLowerCase(),
                                last_name: lname.toLowerCase(),
                                email: email.toLowerCase(),
                                gender: gender.toLowerCase(),
                                dob: dob.toLowerCase(),
                                years_of_exp: yearsOfExp.toLowerCase(),
                                degrees: degrees.toLowerCase(),
                                certs: certs.toLowerCase(),
                                certs_issuer: certsIssuer.toLowerCase(),
                                job_position: jobPosition.toLowerCase(),
                                job_title: jobTitle.toLowerCase(),
                                practice_setting: practiceSetting.toLowerCase(),
                                preferred_contact: preferredContact.toLowerCase(),
                                phone: phone.toLowerCase(),
                                address: address.toLowerCase(),
                                address_city: addressCity.toLowerCase(),
                                address_state: addressState.toLowerCase(),
                                address_zip: addressZip.toLowerCase(),
                                references: references.toLowerCase(),
                                recruited_by: recruitedBy.toLowerCase(),
                                rn_license_expiration: rnLicenseExpiration.toLowerCase(),
                                rn_license_number: rnLicenseNumber.toLowerCase(),
                                schools: schools.toLowerCase(),
                                workplace: workplace.toLowerCase(),
                                photo_url: url,
                            },
                                {
                                    merge: true
                                });
                        setProgress(0);
                        setFname('')
                        setMname('')
                        setLname('')
                        setEmail('')
                        setYearsOfExp('')
                        setDegrees('')
                        setPhone('')
                        setCerts('')
                        setCertsIssuer('')
                        setGender('');
                        setJobPosition('');
                        setJobTitle('');
                        setPracticeSettings('');
                        setPreferredContact('');
                        setAddressCity('');
                        setAddressState('');
                        setAddressZip('');
                        setAddress('');
                        setDob('');
                        setRecruitedBy('');
                        setRnLicenseExpiration('');
                        setRnLicenseNumber('');
                        setSchools('');
                        setWorkplace('');
                        setReferences('')
                        setImageFile(null)
                        // reroute to account page or homepage or events or something
                    })
            }
        )
    };

    return (
        <Container>
            <Row className='my-3 text-center'>
                <h3 className='fw-bold fs-2'>Create Member Account</h3>
            </Row>
            <Form>
                <Row>
                    <Col md={4}>
                        <FormGroup floating>
                            <Input
                                id="firstName"
                                placeholder="Password"
                                value={fname}
                                onChange={e => setFname(e.target.value)}
                            />
                            <Label for="firstName">
                                First Name
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup floating>
                            <Input
                                id="middleName"
                                placeholder="Middle Name"
                                value={mname}
                                onChange={e => setMname(e.target.value)}
                            />
                            <Label for="middleName">
                                Middle Name
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup floating>
                            <Input
                                id="lastName"
                                placeholder="Last Name"
                                value={lname}
                                onChange={e => setLname(e.target.value)}
                            />
                            <Label for="lastName">
                                Last Name
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup floating>
                            <Input
                                id="address"
                                placeholder="Address"
                                type="text"
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                            />
                            <Label for="address">
                                Address
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup floating>
                            <Input
                                id="City"
                                placeholder="City"
                                type="city"
                                value={addressCity}
                                onChange={e => setAddressCity(e.target.value)}
                            />
                            <Label for="City">
                                City
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup floating>
                            <Input
                                id="addressState"
                                placeholder="State"
                                type="text"
                                value={addressState}
                                onChange={e => setAddressState(e.target.value)}
                            />
                            <Label for="addressState">
                                State
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup floating>
                            <Input
                                id="addressZip"
                                placeholder="Zip"
                                type="text"
                                value={addressZip}
                                onChange={e => setAddressZip(e.target.value)}
                            />
                            <Label for="addressZip">
                                Zip
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup floating>
                            <Input
                                id="exampleEmail"
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Label for="exampleEmail">
                                Email
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup floating>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                    />
                    <Label for="examplePassword">
                        Password
                    </Label>
                </FormGroup>
                <FormGroup floating>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                    />
                    <Label for="examplePassword">
                        Password
                    </Label>
                </FormGroup>
                <FormGroup floating>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                    />
                    <Label for="examplePassword">
                        Password
                    </Label>
                </FormGroup>
                <FormGroup floating>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                    />
                    <Label for="examplePassword">
                        Password
                    </Label>
                </FormGroup>
                <FormGroup floating>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                    />
                    <Label for="examplePassword">
                        Password
                    </Label>
                </FormGroup>
                <FormGroup floating>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                    />
                    <Label for="examplePassword">
                        Password
                    </Label>
                </FormGroup>
                <Button>
                    Submit
                </Button>
            </Form>
        </Container>
        // application data entry
        // signup buttons google/emailLink
    )
}

export default CreateAccount