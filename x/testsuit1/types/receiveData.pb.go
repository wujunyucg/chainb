// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: testsuit1/receiveData.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type ReceiveData struct {
	Index     string `protobuf:"bytes,2,opt,name=index,proto3" json:"index,omitempty"`
	DataIndex string `protobuf:"bytes,3,opt,name=dataIndex,proto3" json:"dataIndex,omitempty"`
	Data      string `protobuf:"bytes,4,opt,name=data,proto3" json:"data,omitempty"`
	Chain     string `protobuf:"bytes,5,opt,name=chain,proto3" json:"chain,omitempty"`
}

func (m *ReceiveData) Reset()         { *m = ReceiveData{} }
func (m *ReceiveData) String() string { return proto.CompactTextString(m) }
func (*ReceiveData) ProtoMessage()    {}
func (*ReceiveData) Descriptor() ([]byte, []int) {
	return fileDescriptor_bbd229df2f35bf7e, []int{0}
}
func (m *ReceiveData) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ReceiveData) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ReceiveData.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ReceiveData) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ReceiveData.Merge(m, src)
}
func (m *ReceiveData) XXX_Size() int {
	return m.Size()
}
func (m *ReceiveData) XXX_DiscardUnknown() {
	xxx_messageInfo_ReceiveData.DiscardUnknown(m)
}

var xxx_messageInfo_ReceiveData proto.InternalMessageInfo

func (m *ReceiveData) GetIndex() string {
	if m != nil {
		return m.Index
	}
	return ""
}

func (m *ReceiveData) GetDataIndex() string {
	if m != nil {
		return m.DataIndex
	}
	return ""
}

func (m *ReceiveData) GetData() string {
	if m != nil {
		return m.Data
	}
	return ""
}

func (m *ReceiveData) GetChain() string {
	if m != nil {
		return m.Chain
	}
	return ""
}

func init() {
	proto.RegisterType((*ReceiveData)(nil), "user.chainb.testsuit1.ReceiveData")
}

func init() { proto.RegisterFile("testsuit1/receiveData.proto", fileDescriptor_bbd229df2f35bf7e) }

var fileDescriptor_bbd229df2f35bf7e = []byte{
	// 205 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x2e, 0x49, 0x2d, 0x2e,
	0x29, 0x2e, 0xcd, 0x2c, 0x31, 0xd4, 0x2f, 0x4a, 0x4d, 0x4e, 0xcd, 0x2c, 0x4b, 0x75, 0x49, 0x2c,
	0x49, 0xd4, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0x2d, 0x2d, 0x4e, 0x2d, 0xd2, 0x4b, 0xce,
	0x48, 0xcc, 0xcc, 0x4b, 0xd2, 0x83, 0x2b, 0x94, 0x12, 0x49, 0xcf, 0x4f, 0xcf, 0x07, 0xab, 0xd0,
	0x07, 0xb1, 0x20, 0x8a, 0x95, 0xb2, 0xb9, 0xb8, 0x83, 0x10, 0x26, 0x08, 0x89, 0x70, 0xb1, 0x66,
	0xe6, 0xa5, 0xa4, 0x56, 0x48, 0x30, 0x29, 0x30, 0x6a, 0x70, 0x06, 0x41, 0x38, 0x42, 0x32, 0x5c,
	0x9c, 0x29, 0x89, 0x25, 0x89, 0x9e, 0x60, 0x19, 0x66, 0xb0, 0x0c, 0x42, 0x40, 0x48, 0x88, 0x8b,
	0x05, 0xc4, 0x91, 0x60, 0x01, 0x4b, 0x80, 0xd9, 0x20, 0x73, 0xc0, 0x0e, 0x90, 0x60, 0x85, 0x98,
	0x03, 0xe6, 0x38, 0x39, 0x9d, 0x78, 0x24, 0xc7, 0x78, 0xe1, 0x91, 0x1c, 0xe3, 0x83, 0x47, 0x72,
	0x8c, 0x13, 0x1e, 0xcb, 0x31, 0x5c, 0x78, 0x2c, 0xc7, 0x70, 0xe3, 0xb1, 0x1c, 0x43, 0x94, 0x46,
	0x7a, 0x66, 0x49, 0x46, 0x69, 0x92, 0x5e, 0x72, 0x7e, 0xae, 0x3e, 0xc8, 0xf9, 0xfa, 0x10, 0xe7,
	0xeb, 0x57, 0xe8, 0x23, 0x7c, 0x5a, 0x52, 0x59, 0x90, 0x5a, 0x9c, 0xc4, 0x06, 0x76, 0xb7, 0x31,
	0x20, 0x00, 0x00, 0xff, 0xff, 0x7d, 0xb1, 0x28, 0xcc, 0x03, 0x01, 0x00, 0x00,
}

func (m *ReceiveData) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ReceiveData) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ReceiveData) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Chain) > 0 {
		i -= len(m.Chain)
		copy(dAtA[i:], m.Chain)
		i = encodeVarintReceiveData(dAtA, i, uint64(len(m.Chain)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.Data) > 0 {
		i -= len(m.Data)
		copy(dAtA[i:], m.Data)
		i = encodeVarintReceiveData(dAtA, i, uint64(len(m.Data)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.DataIndex) > 0 {
		i -= len(m.DataIndex)
		copy(dAtA[i:], m.DataIndex)
		i = encodeVarintReceiveData(dAtA, i, uint64(len(m.DataIndex)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Index) > 0 {
		i -= len(m.Index)
		copy(dAtA[i:], m.Index)
		i = encodeVarintReceiveData(dAtA, i, uint64(len(m.Index)))
		i--
		dAtA[i] = 0x12
	}
	return len(dAtA) - i, nil
}

func encodeVarintReceiveData(dAtA []byte, offset int, v uint64) int {
	offset -= sovReceiveData(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *ReceiveData) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Index)
	if l > 0 {
		n += 1 + l + sovReceiveData(uint64(l))
	}
	l = len(m.DataIndex)
	if l > 0 {
		n += 1 + l + sovReceiveData(uint64(l))
	}
	l = len(m.Data)
	if l > 0 {
		n += 1 + l + sovReceiveData(uint64(l))
	}
	l = len(m.Chain)
	if l > 0 {
		n += 1 + l + sovReceiveData(uint64(l))
	}
	return n
}

func sovReceiveData(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozReceiveData(x uint64) (n int) {
	return sovReceiveData(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *ReceiveData) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowReceiveData
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: ReceiveData: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ReceiveData: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReceiveData
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthReceiveData
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthReceiveData
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Index = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DataIndex", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReceiveData
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthReceiveData
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthReceiveData
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DataIndex = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Data", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReceiveData
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthReceiveData
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthReceiveData
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Data = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Chain", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReceiveData
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthReceiveData
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthReceiveData
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Chain = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipReceiveData(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthReceiveData
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipReceiveData(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowReceiveData
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowReceiveData
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowReceiveData
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthReceiveData
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupReceiveData
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthReceiveData
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthReceiveData        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowReceiveData          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupReceiveData = fmt.Errorf("proto: unexpected end of group")
)
