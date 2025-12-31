import requests

class MemoryClient:
    def __init__(self, base_url: str):
        self.base_url = base_url.rstrip("/")

    def search(self, query: str, user_id: str, limit: int = 5):
        res = requests.post(
            f"{self.base_url}/api/mem/search",
            json={
                "userId": user_id,
                "query": query,
                "limit": limit
            },
            timeout=5
        )
        res.raise_for_status()
        return res.json().get("memories", [])

    def add(self, content: str, user_id: str, type="fact", importance=0.7):
        requests.post(
            f"{self.base_url}/api/mem/store",
            json={
                "userId": user_id,
                "content": content,
                "type": type,
                "importance": importance
            },
            timeout=5
        )
