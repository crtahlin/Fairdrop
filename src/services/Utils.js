// Copyright 2019 The FairDataSociety Authors
// This file is part of the FairDataSociety library.
//
// The FairDataSociety library is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// The FairDataSociety library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with the FairDataSociety library. If not, see <http://www.gnu.org/licenses/>.

import Crypto from 'crypto';
import zxcvbn from 'zxcvbn';

function generatePassword (){
    return new Promise((resolve, reject)=>{
      Crypto.randomBytes(48, function(err, buffer) {
        resolve(buffer.toString('hex'));
      });
    })
  }

function humanFileSize(size) {
      var i = Math.floor( Math.log(size) / Math.log(1024) );
      return ( size / Math.pow(1024, i) ).toFixed(0) * 1 + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][i];
  }

function humanEntropy(password){
    return zxcvbn(password).crack_times_display.offline_fast_hashing_1e10_per_second;
  }

export default {generatePassword, humanFileSize, humanEntropy}
