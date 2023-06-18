import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { db, storage } from '../firebase';
import firebase from 'firebase';

import regexPhoneNumber from '../lib/formValidation';

function CreateAccount() {
    const [fname, setFname] = useState('');
    const [mname, setMname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [schools, setSchools] = useState('');
    const [degrees, setDegrees] = useState('');
    const [certs, setCerts] = useState('');
    const [certsIssuer, setCertsIssuer] = useState('');
    const [certsExpiration, setCertsExpiration] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    // const [jobPosition, setJobPosition] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [practiceSetting, setPracticeSetting] = useState('');
    const [practiceSettingOther, setPracticeSettingOther] = useState('');
    const [preferredContact, setPreferredContact] = useState('');
    const [addressCity, setAddressCity] = useState('');
    const [addressState, setAddressState] = useState('');
    const [addressZip, setAddressZip] = useState('');
    const [address, setAddress] = useState('');
    const [dob, setDob] = useState('');
    const [recruitedBy, setRecruitedBy] = useState('');
    const [licenseExpiration, setLicenseExpiration] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [membership, setMembership] = useState('');
    const [membershipType, setMembershipType] = useState('');
    const [membershipExpiration, setMembershipExpiration] = useState('');
    const [imageFile, setImageFile] = useState('');
    const [progress, setProgress] = useState(0);
    const [userInfo, setUserInfo] = useState('');

    const [error, setError] = useState("")
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);

    // redux
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        db
            .collection('users')
            .where('auth_uid', '==', `${user?.uid}`)
            .onSnapshot(snapshot => {
                setUserInfo(snapshot.docs.map(doc => ({
                    id: doc.id,
                    user: doc.data()
                })));
            })

    }, [user])

    useEffect(() => {
        if (userInfo[0]?.user.has_app_on_file === false) {
            navigate('/create-account')
        } else if (userInfo[0]?.user.has_paid_membership === false) {
            navigate('/membership-payment')
        } else if (!user) {
            navigate('/')
        }
    }, [])

    const handleChange = e => {
        // Listen for changes in CardElement
        // and display any errors as the customer types their card detaiLS
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '')
    }

    const handleImage = (e) => {
        if (e.target.files[0]) {
            setImageFile(e.target.files[0])
        }
    };

    // function validForm() {
    //    const formValues = [fname, mname, lname, address, addressCity, addressState, addressZip, phone, email, preferredContact, dob, gender, jobTitle, schools, degrees, licenseNumber, licenseExpiration, practiceSetting, membership, membershipType, membershipExpiration];
    //    for (let i = 0; i < formValues.length; i++) {
    //     if (formValues[i].length < 1) {
    //         console.log("false")
    //         setError(formValues[i].keys)
    //         alert(error)
    //         return false
    //     } else {
    //         console.log(true)
    //         return true
    //     }
    //    }
    // }

    const handleCreateMember = (e) => {
        e.preventDefault();

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
                            .collection("users-applications")
                            .doc(user.uid)
                            .set({
                                created: firebase.firestore.FieldValue.serverTimestamp(),
                                auth_uid: user.uid,
                                first_name: fname.toLowerCase(),
                                middle_name: mname.toLowerCase(),
                                last_name: lname.toLowerCase(),
                                email: email.toLowerCase(),
                                gender: gender.toLowerCase(),
                                dob: dob.toLowerCase(),
                                degrees: degrees.toLowerCase(),
                                certs: certs.toLowerCase(),
                                certs_issuer: certsIssuer.toLowerCase(),
                                certs_expiration: certsExpiration.toLowerCase(),
                                // job_position: jobPosition.toLowerCase(),
                                job_title: jobTitle.toLowerCase(),
                                practice_setting: practiceSetting.toLowerCase(),
                                practice_setting_other: practiceSettingOther.toLowerCase(),
                                preferred_contact: preferredContact.toLowerCase(),
                                phone: phone.toLowerCase(),
                                address: address.toLowerCase(),
                                address_city: addressCity.toLowerCase(),
                                address_state: addressState.toLowerCase(),
                                address_zip: addressZip.toLowerCase(),
                                recruited_by: recruitedBy.toLowerCase(),
                                license_expiration: licenseExpiration.toLowerCase(),
                                license_number: licenseNumber.toLowerCase(),
                                schools: schools.toLowerCase(),
                                membership: membership.toLowerCase(),
                                membership_type: membershipType.toLowerCase(),
                                membership_expiration: membershipExpiration.toLowerCase(),
                                photo_url: url
                            },
                                {
                                    merge: true
                                });
                        setProgress(0);
                        setFname('')
                        setMname('')
                        setLname('')
                        setEmail('')
                        setDegrees('')
                        setPhone('')
                        setCerts('')
                        setCertsIssuer('')
                        setGender('');
                        // setJobPosition('');
                        setJobTitle('');
                        setPracticeSetting('');
                        setPracticeSettingOther('');
                        setPreferredContact('');
                        setAddressCity('');
                        setAddressState('');
                        setAddressZip('');
                        setAddress('');
                        setDob('');
                        setRecruitedBy('');
                        setLicenseExpiration('');
                        setLicenseNumber('');
                        setSchools('');
                        setMembershipType('');
                        setImageFile(null);
                        // reroute to account page or homepage or events or something
                    })
            }
        )

        if (membership === 'existing member') {
            db
                .collection("users")
                .doc(user.uid)
                .set({
                    has_app_on_file: true,
                    has_paid_membership: true,
                    membership_exp: membershipExpiration,
                    membership_type: membershipType,
                },
                    {
                        merge: true
                    }
                )
            setMembership('');
            navigate('/account');
        } else {
            db
                .collection("users")
                .doc(user.uid)
                .set({
                    has_app_on_file: true,
                    membership_exp: membershipExpiration,
                },
                    {
                        merge: true
                    }
                )
            setMembership('');
            navigate('/membership-payment');
        }
    };

    // console.log(regexPhoneNumber(phone));

    return (
        <Container className='mb-3'>
            <Row className='my-3 text-center'>
                <h3 className='fw-bold fs-2'>Create Member Account</h3>
            </Row>
            <Row>
                <h3>Personal Information</h3>
            </Row>
            <Form onSubmit={handleCreateMember}>
                <Row>
                    <Col md={4}>
                        <FormGroup floating>
                            <Input
                                id="firstName"
                                placeholder="Password"
                                value={fname}
                                onChange={e => setFname(e.target.value)}
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
                            />
                            <Label for="addressZip">
                                Zip
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup floating>
                            <Input
                                id="phone"
                                placeholder="Phone"
                                type="tel"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                required
                            />
                            <Label for="phone">
                                Phone
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup floating>
                            <Input
                                id="exampleEmail"
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                            <Label for="exampleEmail">
                                Email
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup floating>
                            <Input
                                id="preferredContact"
                                placeholder="Preferred Contact"
                                type="select"
                                value={preferredContact}
                                onChange={e => setPreferredContact(e.target.value)}
                                required
                            >
                                <option value={""}>--Choose option--</option>
                                <option value={"phone"}>Phone</option>
                                <option value={"email"}>Email</option>
                                <option value={"mail"}>Mail</option>
                            </Input>
                            <Label for="preferredContact">
                                Preferred Contact
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup floating>
                            <Input
                                id="dob"
                                placeholder="DOB"
                                type="date"
                                value={dob}
                                onChange={e => setDob(e.target.value)}
                                required
                            />
                            <Label for="dob">
                                DOB
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup floating>
                            <Input
                                id="gender"
                                placeholder="Gender"
                                type="select"
                                value={gender}
                                onChange={e => setGender(e.target.value)}
                                required
                            >
                                <option value={""}>--Choose option--</option>
                                <option value={"male"}>Male</option>
                                <option value={"female"}>Female</option>
                                <option value={"other"}>Other</option>
                            </Input>
                            <Label for="gender">
                                Gender
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                {/* <Row>
                    <Col>
                        <FormGroup floating>
                            <Input
                                id="imageUpload"
                                placeholder="Upload Profile Image"
                                type="file"
                                onChange={handleImage}
                            />
                            <Label for="dimageUploadob">
                                Upload Profile Image
                            </Label>
                        </FormGroup>
                    </Col>
                </Row> */}
                <hr />
                <Row>
                    <h3>Professional Information</h3>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup floating>
                            <Input
                                id="jobTitle"
                                placeholder="Job Title"
                                type="text"
                                value={jobTitle}
                                onChange={e => setJobTitle(e.target.value)}
                                required
                            />
                            <Label for="jobTitle">
                                Job Title
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup floating>
                            <Input
                                id="schools"
                                placeholder="Schools"
                                type="text"
                                value={schools}
                                onChange={e => setSchools(e.target.value)}
                                required
                            />
                            <Label for="schools">
                                Schools
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup floating>
                            <Input
                                id="degrees"
                                placeholder="Degrees"
                                type="text"
                                value={degrees}
                                onChange={e => setDegrees(e.target.value)}
                                required
                            />
                            <Label for="degrees">
                                Degrees
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup floating>
                            <Input
                                id="licenseNumber"
                                placeholder="License Number"
                                type="text"
                                value={licenseNumber}
                                onChange={e => setLicenseNumber(e.target.value)}
                                required
                            />
                            <Label for="licenseNumber">
                                RN/MD License #
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup floating>
                            <Input
                                id="licenseExpiration"
                                placeholder="License Expiration"
                                type="date"
                                value={licenseExpiration}
                                onChange={e => setLicenseExpiration(e.target.value)}
                                required
                            />
                            <Label for="licenseExpiration">
                                License Expiration
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup floating>
                            <Input
                                id="certification"
                                placeholder="Certification"
                                type="text"
                                value={certs}
                                onChange={e => setCerts(e.target.value)}
                            />
                            <Label for="certification">
                                Certification
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup floating>
                            <Input
                                id="certificationIssuer"
                                placeholder="Certification Issuer"
                                type="text"
                                value={certsIssuer}
                                onChange={e => setCertsIssuer(e.target.value)}
                            />
                            <Label for="certificationIssuer">
                                Certification Issuer
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup floating>
                            <Input
                                id="certificationExpiration"
                                placeholder="Certification Expiration"
                                type="date"
                                value={certsExpiration}
                                onChange={e => setCertsExpiration(e.target.value)}
                            />
                            <Label for="certificationExpiration">
                                Certification Expiration
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup floating>
                    <Input
                        id="practiceSetting"
                        placeholder="Practice Setting"
                        type="select"
                        value={practiceSetting}
                        onChange={e => setPracticeSetting(e.target.value)}
                        required
                    >
                        <option value={""}>--Please choose an option--</option>
                        <option value={"hospital"}>Hospital</option>
                        <option value={"asc"}>ASC</option>
                        <option value={"hospice"}>Hospice</option>
                        <option value={"office/clinic"}>Office/Clinic</option>
                        <option value={"management/administration"}>Management/Administration</option>
                        <option value={"industry"}>Industry</option>
                        <option value={"school"}>School</option>
                        <option value={"long term care"}>Long Term Care</option>
                        <option value={"home care"}>Home Care</option>
                        <option value={"other"}>Other</option>
                    </Input>
                    <Label for="practiceSetting">
                        Practice Setting
                    </Label>
                </FormGroup>
                {practiceSetting === "other" ?
                    <FormGroup floating>
                        <Input
                            id="practiceSettingOther"
                            placeholder="Practice Setting Other:"
                            type="text"
                            value={practiceSettingOther}
                            onChange={e => setPracticeSettingOther(e.target.value)}
                            required
                        />
                        <Label for="practiceSettingOther">
                            Practice Setting Other:
                        </Label>
                    </FormGroup>
                    :
                    ""
                }
                <hr />
                <Row>
                    <h3>Membership</h3>
                </Row>
                <Row>
                    <Col md={8}>
                        <FormGroup floating>
                            <Input
                                id="recruitedBy"
                                placeholder="Recruited By"
                                type="text"
                                value={recruitedBy}
                                onChange={e => setRecruitedBy(e.target.value)}
                            />
                            <Label for="recruitedBy">
                                Recruited By
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup floating>
                            <Input
                                id="membership"
                                placeholder="Membership"
                                type="select"
                                value={membership}
                                onChange={(e) => {
                                    setMembership(e.target.value);
                                    setMembershipType('');
                                    setMembershipExpiration('');
                                }}
                                required
                            >
                                <option value={""}>--Choose option--</option>
                                <option value={"new member"}>New Member</option>
                                <option value={"renewal"}>Renewal</option>
                                <option value={"existing member"}>Existing Member</option>
                            </Input>
                            <Label for="membership">
                                Membership
                            </Label>
                        </FormGroup>
                    </Col>
                    {membership === "existing member" || membership === "renewal" ?
                        <>
                            <Col md={4}>
                                <FormGroup floating>
                                    <Input
                                        id="membershipType"
                                        placeholder="Membership Type"
                                        type="select"
                                        value={membershipType}
                                        onChange={e => setMembershipType(e.target.value)}
                                        required
                                    >
                                        <option value={""}>--Choose option--</option>
                                        <option value={"regular member 1yr"}>Regular Member ($85/1yr)</option>
                                        <option value={"regular member 2yr"}>Regular Member ($170/2yr)</option>
                                        <option value={"associate member 1yr"}>Associate Member ($60/1yr)</option>
                                        <option value={"associate member 2yr"}>Associate Member ($120/2yr)</option>
                                        <option value={"retired non-practicing member 1yr"}>Retired Non-Practicing Member ($60/1yr)</option>
                                        <option value={"retired non-practicing member 2yr"}>Retired Non-Practicing Member ($120/2yr)</option>
                                        <option value={"student member 1yr"}>Student Member ($60/1yr)</option>
                                        <option value={"student member 2yr"}>Student Member ($120/2yr)</option>
                                        <option value={"auxillary member 1yr"}>Auxillary Member ($25/1yr)</option>
                                        <option value={"auxillary member 2yr"}>Auxillary Member ($50/2yr)</option>
                                    </Input>
                                    <Label for="membershipType">
                                        Membership Type
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup floating>
                                    <Input
                                        id="membershipTypeExpiration"
                                        placeholder="Membership Type Expiration"
                                        type="date"
                                        value={membershipExpiration}
                                        onChange={e => setMembershipExpiration(e.target.value)}
                                        required
                                    />
                                    <Label for="membershipTypeExpiration">
                                        Current Membership Expiration
                                    </Label>
                                </FormGroup>
                            </Col>
                            {membership === "renewal"
                                ?
                                <Col md={12} className='text-center'>
                                    <Button
                                    // onClick={handleCreateMember}
                                    >
                                        Next
                                    </Button>
                                </Col>
                                :
                                <Col md={12} className='text-center'>
                                    <Button
                                    // onClick={handleCreateMember}
                                    >
                                        Submit
                                    </Button>
                                </Col>}

                        </>
                        :
                        <Col md={12} className='text-center'>
                            <Button
                            // onClick={handleCreateMember}
                            >
                                Next
                            </Button>
                        </Col>
                    }
                </Row>
            </Form>
        </Container>
    )
}

export default CreateAccount