var result = jQuery(".download a[href*=hd]").map(function(){return this.href}).toArray().join("\n");
document.write(result)
