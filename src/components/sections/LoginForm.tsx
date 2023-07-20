import { useRef, useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import loginFetch from "../../redux/actions/loginAction";
import { store, RootState, resetStoreAction } from "../../redux/store/store";


const LoginForm = () => {
  const dispatch = store.dispatch;
  const login = useSelector((state: RootState) => state.login);
  const me = useSelector((state: RootState) => state.me);
  const formRef = useRef<HTMLFormElement>(null);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const loadData = async () => {
    await dispatch(loginFetch(formValues.username, formValues.password));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loadData();
    navigate('/home')
  };

  useEffect(() => {
    dispatch(resetStoreAction);
    if (formRef.current) {
      formRef.current.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-30">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="fs-5">Username</Form.Label>
          <br />
          <input name="username" placeholder="Username" type="text" id="formBasicEmail" className="form-control-sm" value={formValues.username}  onChange={handleChange}></input>
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="mt-3">
          <Form.Label className="fs-5">Password</Form.Label>
          <br />
          <input name="password" placeholder="Password" type="password" id="formBasicPassword" className="form-control-sm" value={formValues.password} onChange={handleChange}></input>
        </Form.Group>
        <br/>
        {login.error && <p className="text-danger text-center">{login.error}</p>}
        
        <div className="text-center">
          <button type="submit" className="btn btn-info btn-sm">Login</button>
          {/* <Button variant="primary" type="submit">Primary</Button>{' '}
          <Button variant="primary" type="submit">Primary</Button>{' '}
          <Button variant="secondary" type="reset">Secondary</Button>{' '} */}
        </div>

        <p>{me.creative && <span>{me.creative.firstname}</span>}</p>
      </Form>
    </div>
  );
};

export default LoginForm;
