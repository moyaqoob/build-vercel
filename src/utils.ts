const MAX_LEN = 5;

export function generate() {
    let ans = "";
    const subset = "123456789qwertyuiopplkjhgfdsamnbvcxz";

    // Generate a string of length MAX_LEN
    for (let i = 0; i < MAX_LEN; i++) {
        ans += subset[Math.floor(Math.random() * subset.length)];
    }

    return ans;
}
