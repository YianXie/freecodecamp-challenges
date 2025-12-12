from collections import defaultdict


def update_inventory(inventory, shipment):
    items = defaultdict(int)
    for i in inventory:
        items[i[1]] += i[0]

    for s in shipment:
        items[s[1]] += s[0]

    ans = []
    for key, value in items.items():
        ans.append([value, key])

    return ans
