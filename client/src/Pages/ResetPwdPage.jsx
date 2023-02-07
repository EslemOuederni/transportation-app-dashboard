import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ResetPwdPage = () => {
  const [validUrl, setValidUrl] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const param = useParams();

  const url = `http://localhost:3000/api/admin/resetPwd/${param.id}`;

  useEffect(() => {
    const verifyUrl = async () => {
      try {
        await axios.get(
          "http://localhost:3000/api/admin/resetPwd/63b5c94303761163ab91f3f2"
        );
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyUrl();
  }, [param, url]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      try {
        let result = await axios.post(url, { password, confirmPassword });
        console.log(result.data);
        setError("");
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <h1>Reset your password</h1>
      {validUrl ? (
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p>{error}</p>
          <button type="submit">Send</button>
        </form>
      ) : (
        <p>Invalid URL</p>
      )}
    </div>
  );
};

export default ResetPwdPage;
