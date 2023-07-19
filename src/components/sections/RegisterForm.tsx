import React, {
  useState,
  FormEvent,
  ChangeEvent,
  useEffect,
  useRef,
} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import registerFetch from "../../redux/actions/registerAction";
import { store, RootState, resetStoreAction } from "../../redux/store/store";
import { Profession, Skill } from "../../types/creativeType";
import ProfessionsChoice from "../elements/ProfessionsChoice";
import SkillsChoice from "../elements/SkillsChoice";

export interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  stageName: string;
  professions: Profession[];
  city: string;
  state: string;
  bio: string;
  skills: Skill[];
}

const RegisterForm: React.FC = () => {
  const dispatch = store.dispatch;
  const register = useSelector((state: RootState) => state.register);
  const me = useSelector((state: RootState) => state.me);
  const formRef = useRef<HTMLFormElement>(null);

  const [formValues, setFormValues] = useState<RegisterFormValues>({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    stageName: "",
    professions: [],
    bio: "",
    city: "",
    state: "",
    skills: [],
  });

  useEffect(() => {
    dispatch(resetStoreAction);
    if (formRef.current) {
      formRef.current.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerFetch(formValues));
  };

  const handleReset = () => {
    setFormValues({
      username: "",
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      stageName: "",
      professions: [],
      city: "",
      state: "",
      bio: "",
      skills: [],
    });
  };

  return (
    <div  className="mt-30 mx-5 px-5">
      <Form onSubmit={handleSubmit} onReset={handleReset} className="mt-30 mx-20">
        <Form.Group controlId="formUsername">
          <Form.Label className="fs-5">Username</Form.Label>
          <br />
          {/* <Form.Control
            type="text"
            name="username"
            placeholder="Enter username"
            value={formValues.username}
            onChange={handleChange}
          /> */}
          <input name="username" placeholder="Username" type="text" id="formBasicEmail" className="form-control-sm" value={formValues.username}  onChange={handleChange}></input>
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label className="fs-5">Email</Form.Label>
          <br />
          {/* <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formValues.email}
            onChange={handleChange}
          /> */}
          <input name="email" placeholder="Enter email" type="email" id="formEmail" className="form-control-sm"  value={formValues.email} onChange={handleChange}></input>
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label className="fs-5">Password</Form.Label>
          <br />
          {/* <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            value={formValues.password}
            onChange={handleChange}
          /> */}
          <input name="password" placeholder="Password" type="password" id="formBasicPassword" className="form-control-sm" value={formValues.password} onChange={handleChange}></input>
        </Form.Group>

        <Form.Group controlId="formFirstname" className="mt-3">
          <Form.Label className="fs-5">First Name</Form.Label>
          <br />
          {/* <Form.Control
            type="text"
            name="firstname"
            placeholder="Enter first name"
            value={formValues.firstname}
            onChange={handleChange}
          /> */}
          <input name="firstname" placeholder="Enter first name" type="text" id="formFirstname" className="form-control-sm" value={formValues.firstname} onChange={handleChange}></input>
        </Form.Group>

        <Form.Group controlId="formLastname" className="mt-3">
          <Form.Label className="fs-5">Last Name</Form.Label>
          <br />
          {/* <Form.Control
            type="text"
            name="lastname"
            placeholder="Enter last name"
            value={formValues.lastname}
            onChange={handleChange}
          /> */}
          <input name="lastname" placeholder="Enter last name" type="text" id="formLastname" className="form-control-sm" value={formValues.lastname} onChange={handleChange}></input>
        </Form.Group>

        <Form.Group controlId="formStageName" className="mt-3">
          <Form.Label className="fs-5">Stage Name</Form.Label>
          <br />
          {/* <Form.Control
            type="text"
            name="stageName"
            placeholder="Enter stage name"
            value={formValues.stageName}
            onChange={handleChange}
          /> */}
          <input name="stageName" placeholder="Enter stage name" type="text" id="formStageName" className="form-control-sm"  value={formValues.stageName} onChange={handleChange}></input>
        </Form.Group>

        <ProfessionsChoice formValues={formValues} onChange={setFormValues} />

        <div className="text-center mt-3">
          <button type="submit" className="btn btn-info btn-sm">Register</button>
          {/* <Button variant="primary" type="submit">Primary</Button>{' '}
          <Button variant="primary" type="submit">Primary</Button>{' '}
          <Button variant="secondary" type="reset">Secondary</Button>{' '} */}
        </div>
        {register.error && <p className="text-danger">{register.error}</p>}
        <p>{me.creative && <span>{me.creative.firstname}</span>}</p>
      </Form>
    </div>
  );
};

export default RegisterForm;
