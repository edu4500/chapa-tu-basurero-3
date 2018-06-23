var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/*id: { type: String, unique : true, required : true },*/
var iot_schema = new Schema({
	id: String,
	tipo:String,
	estado:String,
	loc: {
		type: {
			type: String
		},
		coordinates: [Number]
	}
});

iot_schema.methods.parseSendRest = function name() {
	var data = {
		id: this.id,
		tipo: this.tipo,
		estado: this.estado,
		lon: this.loc.coordinates[0],
		lat: this.loc.coordinates[1]
	}
	return data;
}

iot_schema.methods.findNeoGear = function(input,cb){
	var query_b = {
		loc: {
			$near: {
				$geometry: {
					type: "Point",
					coordinates: [input.lon, input.lat]
				},
				$maxDistance: input.distance
			}
		}
	}
	return this.model('iot').find(query_b, cb);
};

iot_schema.index({
	loc: '2dsphere'
});

mongoose.model("iot", iot_schema);
