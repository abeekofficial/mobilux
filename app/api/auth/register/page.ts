const onSubmit = async (data: FormData) => {
  console.log("Submitting form", data);

  const { username: email, password } = data;

  try {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Process response here
    console.log("Registration Successful", response);
    toast({ title: "Registration Successful" });
  } catch (error: any) {
    console.error("Registration Failed:", error);
    toast({ title: "Registration Failed", description: error.message });
  }
};
