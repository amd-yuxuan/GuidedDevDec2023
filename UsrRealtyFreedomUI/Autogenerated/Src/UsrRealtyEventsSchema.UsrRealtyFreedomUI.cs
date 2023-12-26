namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("ea1ca58b-311a-480e-9194-d6344af5f20d");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("c392cad1-fa75-44b8-8b5f-722e9caea0b3");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,111,211,64,16,189,251,87,140,44,14,182,20,173,218,43,129,74,36,164,40,82,5,168,118,122,65,28,54,235,137,187,104,63,172,157,117,74,64,249,239,236,122,147,54,78,138,96,78,246,236,155,55,239,61,141,225,26,169,227,2,161,70,231,56,217,141,103,115,107,54,178,237,29,247,210,154,236,119,6,161,122,146,166,133,106,71,30,245,244,164,115,58,165,181,53,127,123,115,200,22,198,75,47,145,254,3,194,22,91,52,254,128,252,54,116,119,67,235,78,6,1,6,93,81,137,71,212,252,115,80,15,239,33,95,145,187,71,174,252,238,214,33,54,86,175,150,121,249,125,24,238,250,181,146,2,132,226,68,144,48,175,208,193,91,152,113,194,87,94,6,146,20,193,9,157,221,6,221,178,65,216,90,217,192,23,83,241,109,112,83,216,245,15,20,30,8,77,131,110,2,137,110,134,155,96,109,32,253,224,90,2,44,159,217,94,120,99,173,131,2,246,204,117,36,193,114,58,66,37,82,112,131,149,224,189,72,141,50,225,199,216,6,133,212,92,65,231,164,136,57,165,33,246,9,125,189,235,176,153,91,213,107,243,192,85,143,239,14,208,155,34,102,249,53,226,87,213,199,252,108,183,220,64,145,184,110,224,250,234,88,229,8,51,246,20,11,217,146,230,220,8,84,216,4,17,222,245,56,205,46,80,228,93,60,136,112,141,196,91,172,81,119,138,251,40,218,224,19,220,89,193,149,252,197,215,10,171,1,87,28,172,172,8,93,56,87,19,98,15,183,202,238,145,108,239,68,0,89,23,88,38,23,91,98,189,92,75,186,178,124,2,249,197,2,98,67,46,75,170,173,157,201,54,253,229,37,171,237,65,64,249,79,15,65,123,106,176,91,235,52,247,197,153,183,176,246,154,93,205,222,156,167,28,203,63,58,251,52,88,95,252,20,216,69,115,199,241,51,244,62,27,127,237,179,253,31,175,140,94,124,212,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("c7af413d-4901-9f2a-27e5-d33dd2643758"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("c392cad1-fa75-44b8-8b5f-722e9caea0b3"),
				CreatedInSchemaUId = new Guid("ea1ca58b-311a-480e-9194-d6344af5f20d"),
				ModifiedInSchemaUId = new Guid("ea1ca58b-311a-480e-9194-d6344af5f20d")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("ea1ca58b-311a-480e-9194-d6344af5f20d"));
		}

		#endregion

	}

	#endregion

}

