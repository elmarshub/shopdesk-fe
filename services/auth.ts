// export async function loginUser(email: string, password: string) {
//     try {
//         const response = await fetch("https://api.timbu.cloud/auth/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ email, password }),
//         });

//         const data = await response.json();
//         if (!response.ok) {
//             throw new Error(data.message || "Login failed");
//         }
//         return data;
//     } catch (error) {
//         console.error("Login error:", error);
//         throw error;
//     }
// }


export async function loginUser(email: string, password: string) {
    try {
      const response = await fetch("https://api.timbu.cloud/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Login failed. Please check your credentials.");
      }
  
      return data; 
    } catch (error: any) {
      throw new Error(error.message || "Unable to connect to the server.");
    }
  }
  