// 浏览器本地缓存
export function setStore<T>(key: string, value: T): boolean {
    try {
        window.localStorage.setItem(key, JSON.stringify(value))
        return true
    } catch {
        return false
    }
}

// 读取浏览器本地缓存
export function getStore<T>(key: string):T {
    const value = window.localStorage.getItem(key) || 'null'
    return JSON.parse(value)
}

