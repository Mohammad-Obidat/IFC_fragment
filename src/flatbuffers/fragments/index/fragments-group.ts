// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Fragment } from '../../fragments/index/fragment.js';


export class FragmentsGroup {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):FragmentsGroup {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsFragmentsGroup(bb:flatbuffers.ByteBuffer, obj?:FragmentsGroup):FragmentsGroup {
  return (obj || new FragmentsGroup()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsFragmentsGroup(bb:flatbuffers.ByteBuffer, obj?:FragmentsGroup):FragmentsGroup {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new FragmentsGroup()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

items(index: number, obj?:Fragment):Fragment|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Fragment()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

itemsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

coordinationMatrix(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
}

coordinationMatrixLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

coordinationMatrixArray():Float32Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? new Float32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

ids(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readUint32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
}

idsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

idsArray():Uint32Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? new Uint32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

itemsKeys(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readUint32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
}

itemsKeysLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

itemsKeysArray():Uint32Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? new Uint32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

itemsKeysIndices(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readUint32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
}

itemsKeysIndicesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

itemsKeysIndicesArray():Uint32Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? new Uint32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

itemsRels(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readUint32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
}

itemsRelsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

itemsRelsArray():Uint32Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? new Uint32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

itemsRelsIndices(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readUint32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
}

itemsRelsIndicesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

itemsRelsIndicesArray():Uint32Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? new Uint32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

fragmentKeys():string|null
fragmentKeys(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
fragmentKeys(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

id():string|null
id(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
id(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

ifcName():string|null
ifcName(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
ifcName(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

ifcDescription():string|null
ifcDescription(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
ifcDescription(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

ifcSchema():string|null
ifcSchema(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
ifcSchema(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

maxExpressId():number {
  const offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

boundingBox(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? this.bb!.readFloat32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
}

boundingBoxLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

boundingBoxArray():Float32Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? new Float32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

static startFragmentsGroup(builder:flatbuffers.Builder) {
  builder.startObject(14);
}

static addItems(builder:flatbuffers.Builder, itemsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, itemsOffset, 0);
}

static createItemsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startItemsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addCoordinationMatrix(builder:flatbuffers.Builder, coordinationMatrixOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, coordinationMatrixOffset, 0);
}

static createCoordinationMatrixVector(builder:flatbuffers.Builder, data:number[]|Float32Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createCoordinationMatrixVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createCoordinationMatrixVector(builder:flatbuffers.Builder, data:number[]|Float32Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addFloat32(data[i]!);
  }
  return builder.endVector();
}

static startCoordinationMatrixVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addIds(builder:flatbuffers.Builder, idsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, idsOffset, 0);
}

static createIdsVector(builder:flatbuffers.Builder, data:number[]|Uint32Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createIdsVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createIdsVector(builder:flatbuffers.Builder, data:number[]|Uint32Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]!);
  }
  return builder.endVector();
}

static startIdsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addItemsKeys(builder:flatbuffers.Builder, itemsKeysOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, itemsKeysOffset, 0);
}

static createItemsKeysVector(builder:flatbuffers.Builder, data:number[]|Uint32Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createItemsKeysVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createItemsKeysVector(builder:flatbuffers.Builder, data:number[]|Uint32Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]!);
  }
  return builder.endVector();
}

static startItemsKeysVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addItemsKeysIndices(builder:flatbuffers.Builder, itemsKeysIndicesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, itemsKeysIndicesOffset, 0);
}

static createItemsKeysIndicesVector(builder:flatbuffers.Builder, data:number[]|Uint32Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createItemsKeysIndicesVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createItemsKeysIndicesVector(builder:flatbuffers.Builder, data:number[]|Uint32Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]!);
  }
  return builder.endVector();
}

static startItemsKeysIndicesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addItemsRels(builder:flatbuffers.Builder, itemsRelsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, itemsRelsOffset, 0);
}

static createItemsRelsVector(builder:flatbuffers.Builder, data:number[]|Uint32Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createItemsRelsVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createItemsRelsVector(builder:flatbuffers.Builder, data:number[]|Uint32Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]!);
  }
  return builder.endVector();
}

static startItemsRelsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addItemsRelsIndices(builder:flatbuffers.Builder, itemsRelsIndicesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, itemsRelsIndicesOffset, 0);
}

static createItemsRelsIndicesVector(builder:flatbuffers.Builder, data:number[]|Uint32Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createItemsRelsIndicesVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createItemsRelsIndicesVector(builder:flatbuffers.Builder, data:number[]|Uint32Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]!);
  }
  return builder.endVector();
}

static startItemsRelsIndicesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addFragmentKeys(builder:flatbuffers.Builder, fragmentKeysOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, fragmentKeysOffset, 0);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, idOffset, 0);
}

static addIfcName(builder:flatbuffers.Builder, ifcNameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(9, ifcNameOffset, 0);
}

static addIfcDescription(builder:flatbuffers.Builder, ifcDescriptionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(10, ifcDescriptionOffset, 0);
}

static addIfcSchema(builder:flatbuffers.Builder, ifcSchemaOffset:flatbuffers.Offset) {
  builder.addFieldOffset(11, ifcSchemaOffset, 0);
}

static addMaxExpressId(builder:flatbuffers.Builder, maxExpressId:number) {
  builder.addFieldInt32(12, maxExpressId, 0);
}

static addBoundingBox(builder:flatbuffers.Builder, boundingBoxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(13, boundingBoxOffset, 0);
}

static createBoundingBoxVector(builder:flatbuffers.Builder, data:number[]|Float32Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createBoundingBoxVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createBoundingBoxVector(builder:flatbuffers.Builder, data:number[]|Float32Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addFloat32(data[i]!);
  }
  return builder.endVector();
}

static startBoundingBoxVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endFragmentsGroup(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static finishFragmentsGroupBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
}

static finishSizePrefixedFragmentsGroupBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, undefined, true);
}

static createFragmentsGroup(builder:flatbuffers.Builder, itemsOffset:flatbuffers.Offset, coordinationMatrixOffset:flatbuffers.Offset, idsOffset:flatbuffers.Offset, itemsKeysOffset:flatbuffers.Offset, itemsKeysIndicesOffset:flatbuffers.Offset, itemsRelsOffset:flatbuffers.Offset, itemsRelsIndicesOffset:flatbuffers.Offset, fragmentKeysOffset:flatbuffers.Offset, idOffset:flatbuffers.Offset, ifcNameOffset:flatbuffers.Offset, ifcDescriptionOffset:flatbuffers.Offset, ifcSchemaOffset:flatbuffers.Offset, maxExpressId:number, boundingBoxOffset:flatbuffers.Offset):flatbuffers.Offset {
  FragmentsGroup.startFragmentsGroup(builder);
  FragmentsGroup.addItems(builder, itemsOffset);
  FragmentsGroup.addCoordinationMatrix(builder, coordinationMatrixOffset);
  FragmentsGroup.addIds(builder, idsOffset);
  FragmentsGroup.addItemsKeys(builder, itemsKeysOffset);
  FragmentsGroup.addItemsKeysIndices(builder, itemsKeysIndicesOffset);
  FragmentsGroup.addItemsRels(builder, itemsRelsOffset);
  FragmentsGroup.addItemsRelsIndices(builder, itemsRelsIndicesOffset);
  FragmentsGroup.addFragmentKeys(builder, fragmentKeysOffset);
  FragmentsGroup.addId(builder, idOffset);
  FragmentsGroup.addIfcName(builder, ifcNameOffset);
  FragmentsGroup.addIfcDescription(builder, ifcDescriptionOffset);
  FragmentsGroup.addIfcSchema(builder, ifcSchemaOffset);
  FragmentsGroup.addMaxExpressId(builder, maxExpressId);
  FragmentsGroup.addBoundingBox(builder, boundingBoxOffset);
  return FragmentsGroup.endFragmentsGroup(builder);
}
}