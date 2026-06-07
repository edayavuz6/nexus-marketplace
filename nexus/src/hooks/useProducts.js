import { useState, useEffect, useCallback } from "react";

const BASE = "https://dummyjson.com";

export function useProducts({ category = "", search = "", limit = 30 } = {}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let url;
      if (search)
        url = `${BASE}/products/search?q=${encodeURIComponent(search)}&limit=${limit}`;
      else if (category && category !== "all")
        url = `${BASE}/products/category/${encodeURIComponent(category)}?limit=${limit}`;
      else url = `${BASE}/products?limit=${limit}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      setProducts(data.products || []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [category, search, limit]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return { products, loading, error, refetch: fetchProducts };
}

export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE}/products/categories`)
      .then((r) => r.json())
      .then((data) => {
        const cats = Array.isArray(data)
          ? data.map((c) => (typeof c === "string" ? { slug: c, name: c } : c))
          : [];
        setCategories(cats.slice(0, 12));
      })
      .catch(() => setCategories([]))
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading };
}

export function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`${BASE}/products/${id}`)
      .then((r) => r.json())
      .then((data) => setProduct(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { product, loading, error };
}
