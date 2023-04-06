import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Verification() {
  const navigate = useNavigate();

  let { token } = useParams();

  const tokenVerification = async () => {
    try {
      if (token) {
        const response = await axios.post(
          "http://localhost:8001/auth/verification",
          {},
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data.success) {
          alert(response.data.message);
          navigate("/user/login");
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    tokenVerification();
  }, []);

  return (
    <div>
      <p>Your account is being verified </p>
      <p>{token}</p>
    </div>
  );
}

export default Verification;
