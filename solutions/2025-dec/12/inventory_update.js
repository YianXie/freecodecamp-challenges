function updateInventory(inventory, shipment) {
    const items = {};
    for (const i of inventory) {
        items[i[1]] ? (items[i[1]] += i[0]) : (items[i[1]] = i[0]);
    }
    for (const s of shipment) {
        items[s[1]] ? (items[s[1]] += s[0]) : (items[s[1]] = s[0]);
    }

    const ans = [];
    for (const [key, value] of Object.entries(items)) {
        ans.push([value, key]);
    }

    return ans;
}
