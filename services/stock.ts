import { getAccessToken } from "@/app/api/token";


// const cookieStore =  cookies();
//     const organization_id = cookieStore.get("organizationId")?.value;

// const organization_id = "160db8736a9d47989381e01a987e4413";

type Stock = {
  id: string;
  name: string;
  quantity: number;
  buying_price: number;
  currency_code: string;
  product_id: string;
  organization_id: string;
  date_created: string;
  selectedSellingCurrency: { code: string; name: string };
};

type Product = {
  name: string;
  description: string;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: {};
  unavailable: false;
  // "unavailable_start": "2025-03-14T13:14:42.799Z"
  // "unavailable_end": "2025-03-14T13:14:42.799Z",
  status: string;
  id: string;
  parent_product_id: string;
  parent: string;
  organization_id: string;
  categories: [];
  date_created: string;
  last_updated: string;
  user_id: string;
  current_price: string;
  is_deleted: boolean;
  available_quantity: number;
  selling_price: number;
  discounted_price: number;
  buying_price: number;
  photos: [];
  attributes: {};
}

type StockResponse = {
  page: number;
  size: number;
  total: number;
  previous_page: number | null;
  next_page: number | null;
  items: Stock[];
};

type ProductResponse = {
  page: number;
  size: number;
  total: number;
  debug: null;
  previous_page:number | null;
  next_page: number | null;
  items: Product[];
}

export async function CreateProduct(
  productName: string,
 unique_id:string
): Promise<Product> {


  

  try {
    const organization_id = sessionStorage.getItem("organizationId");
    if (!organization_id) {
      throw new Error("Organization ID is missing from sessionStorage");
    }
    const token = await getAccessToken();
    console.log("Token:", token);
    const formData = new FormData();
    formData.append("organization_id", organization_id);
    formData.append("name", productName);
     if (unique_id !== ""){
      formData.append("unique_id", unique_id);
     }


    const response = await fetch("/api/product/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to add stock");
    }

    return data.id;
  } catch (error) {
    console.error("Error adding stock:", error);
    throw error;
  }
}

export async function AddStock(
  productName: string,
  sellingPrice: number,
  quantity: number,
  product_id: string,
  currency_code: string,
  organization_id: string,
  date_created: string,
  selectedSellingCurrency: { code: string; name: string }
): Promise<Stock> {
  try {
    const product_id = await CreateProduct(productName, "")
    const token = await getAccessToken();
    console.log("Token:", token);

    const response = await fetch("/api/stocks/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: productName,
        buying_price: sellingPrice,
        quantity: quantity,
        currency_code: selectedSellingCurrency.code,
        product_id: product_id,
        organization_id: organization_id,
        date_created: new Date().toISOString(),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to add stock");
    }

    return data;
  } catch (error) {
    console.error("Error adding stock:", error);
    throw error;
  }
}
export async function GetProduct(): Promise<StockResponse> {
  try {
    const token = await getAccessToken();

    const response = await fetch(`/api/product/get`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch stock");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching stock:", error);
    throw error;
  }
}
const data2 = GetProduct();
console.log(data2);

export async function GetStock(product_id:string): Promise<StockResponse> {
  try {
    const token = await getAccessToken();

    const response = await fetch(`/api/stocks/get?product_id=${product_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch stock");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching stock:", error);
    throw error;
  }
}

export async function deleteStock(stockId: string): Promise<void> {
  try {
    const token = await getAccessToken();

    const response = await fetch(`/api/stocks/delete`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ stock_id: stockId }), // Pass the ID in the request body
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to delete stock");
    }
  } catch (error) {
    console.error("Error deleting stock:", error);
    throw error;
  }
}


export async function editStock(
  stockId: string,
  stockData: {
    name: string;
    buying_price: number;
    quantity: number;
    currency_code: string;
  }
): Promise<void> {
  try {
    const token = await getAccessToken();

    const response = await fetch(`/api/stocks/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        stock_id: stockId,
        ...stockData,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update stock");
    }
  } catch (error) {
    console.error("Error updating stock:", error);
    throw error;
  }
}
export async function editStockv3(
  stockId: string,
  stockData: {
    name: string;
    quantity: number;
  
  }
): Promise<void> {
  try {
    const token = await getAccessToken();

    const response = await fetch(`/api/stocks/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        stock_id: stockId,
        ...stockData,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update stock");
    }
  } catch (error) {
    console.error("Error updating stock:", error);
    throw error;
  }
}
export async function editPrice(
  stockId: string,
  stockData: {
    buying_price: number;
    currency_code: string;
  }
): Promise<void> {
  try {
    const token = await getAccessToken();

    const response = await fetch(`/api/stocks/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        stock_id: stockId,
        ...stockData,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update price");
    }
  } catch (error) {
    console.error("Error updating price:", error);
    throw error;
  }
}
export async function editQuantity(
  stockId: string,
  stockData: {
    quantity: number;
  
  }
): Promise<void> {
  try {
    const token = await getAccessToken();

    const response = await fetch(`/api/stocks/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        stock_id: stockId,
        ...stockData,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update stock");
    }
  } catch (error) {
    console.error("Error updating stock:", error);
    throw error;
  }
}

export async function editName(
  stockId: string,
  stockData: {
    name: string;
  
  }
): Promise<void> {
  try {
    const token = await getAccessToken();

    const response = await fetch(`/api/stocks/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        stock_id: stockId,
        ...stockData,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update stock");
    }
  } catch (error) {
    console.error("Error updating stock:", error);
    throw error;
  }
}
