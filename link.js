var result = jQuery(".download a[href*=hd]").map(function(){return "<div style='font:16px Menlo'>" + this.href + "</div>"}).toArray().join("\n");
document.write(result)
