var fs = require('fs');
var sizeOf = require('image-size');
const path = require('path');
fs.readdirSync("albunes").forEach(function(album) {
    if (fs.statSync(path.join('albunes', album)).isDirectory()) {
        var with_orientation = [];
        var json_file = path.join('albunes', album, 'list_low.json');
        fs.readdirSync(path.join('albunes', album, 'low')).forEach(function(photo){
            var photo_path = path.join('albunes', album, 'low', photo);
            var dimensions = sizeOf(photo_path);
            with_orientation.push({
                'pa': photo_path,
                'or': dimensions.width > dimensions.height ? 'l' : 'p'
            });
        });
        fs.writeFileSync(json_file, JSON.stringify(with_orientation));
    }
});