import json
import urllib
import urllib.request as urlget
src = (urlget.urlopen("https://velourproductents.eu/products.json")).read().decode("utf-8")
readablejs = json.loads(src)
productdetails = []
def stockcheck(jsonfile):
    for product in jsonfile["products"]:
        for size in product["variants"]:
            if size["available"] == True:
                for x in range(len(productdetails)):
                    if product["title"] in productdetails[x]:
                        productdetails[x].append(str(size["title"]))
                productdetails.append([product["title"],size["title"],size["price"]])

    return dict(zip([i for i in range(len(readablejs["products"])+1)],productdetails))
stockcheck(readablejs)


#Host a website that periodically runs a script and generates a simple page based on the results.
#run script above, generate hmtl page with small section for each itme, with a picture, info, and a link to the item.
